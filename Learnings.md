# Learnings

This is a collection of things I've learned regarding Next.JS while building this app.

## Parallel Routes

[Docs](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes) | [Demo](https://app-router.vercel.app/parallel-routes)

### What does `default.tsx` do?

When I looked at parallel routes documentation, following was my initial understanding:

#### Structure & Code

```bash
app/
  @header/
    page.tsx
  post/[id]/
    page.tsx
  page.tsx
  not-found.tsx
  layout.tsx
```

```tsx
// app/@header/page.tsx
<div>Header</div>

// app/post/[id]/page.tsx
<div>Post {id}</div>

// app/page.tsx
<div>Page <br/><Link href="/post/1">Post 1</Link></div>

// app/layout.tsx
<html>
  <body>
    {header}
    {children}
  </body>
</html>
```

#### My Expectation

- Open the app on `/` and see "Page" with a link to `/post/1` on the UI with "Header" above it.
- Click on the link, navigate to `/post/1` and see "Post 1" with "Header" above it.
- Reload the page on `/post/1` and see "Post 1" with "Header" above it.

#### Actual Result

After reloading the page on `/post/1`, I saw `not-found.tsx` to be rendered instead.

#### Why?

Post reload, the server side rendering is expecting `@header` to exist under `app/post/[id]` and hence, it is not found. If we add a `app/@header/default.tsx` file, its content will render in place of `{header}` in `app/layout.tsx` and we see "Default Header Post 1". Now the structure becomes:

```bash
app/
  @header/
    page.tsx
    default.tsx
  post/[id]/
    page.tsx
  page.tsx
  not-found.tsx
  layout.tsx
```
