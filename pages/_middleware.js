import { NextResponse, NextRequest } from 'next/server';
export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;

  if (
    pathname == '/' ||
    pathname == '/products' ||
    pathname == '/orders' ||
    pathname == '/customers' ||
    pathname == '/managereviews' ||
    pathname == '/checkout' ||
    pathname == '/settings'
  ) {
    return NextResponse.redirect('/overview');
  }

  return NextResponse.next();
}
