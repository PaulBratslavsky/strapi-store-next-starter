import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserMeLoader } from "@/lib/data/services/user";

// Define an array of protected routes
const protectedRoutes = [
  "/dashboard",
  "/cart",
  // Add more protected routes here
];

// Helper function to check if a path is protected
function isProtectedRoute(path: string): boolean {
  return protectedRoutes.some((route) => path.startsWith(route));
}

export async function middleware(request: NextRequest) {
  const user = await getUserMeLoader();
  const currentPath = request.nextUrl.pathname;

  if (isProtectedRoute(currentPath) && user.ok === false) {
    const redirectUrl = new URL("/signin", request.url);
    redirectUrl.searchParams.set("redirect", currentPath);
    return NextResponse.redirect(redirectUrl);
  }

  if (
    (currentPath.startsWith("/signin") || currentPath.startsWith("/signup")) &&
    user.ok === true
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }


  return NextResponse.next();
}

// Optionally, you can add a matcher to optimize performance
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
