import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";


@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const { unprotectedRoute, protectedRoute, routeToRedirect } = route.data || {};

    if (!routeToRedirect)
      return true;

    const token = this.authService.getUserTokenFromStorage();
    const hasToken = !!token;

    if (!hasToken && unprotectedRoute)
      return true;

    if (hasToken && protectedRoute)
      return true

    return void this.router.navigateByUrl(routeToRedirect);
  }

}
