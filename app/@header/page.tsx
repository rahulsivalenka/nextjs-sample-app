import React from 'react';

export default function HeaderPage() {
  return (
    <header className="sticky top-0 left-0 bg-header">
      <div className="h-header bg-header px-6 py-2 flex items-center gap-2 2xl:container 2xl:mx-auto">
        <h1 className="font-medium text-lg">Sample App</h1>

        <div className="ml-auto" />

        <button className="px-6 py-2 font-semibold text-sm bg-accent text-accent-text rounded-full shadow-sm hover:shadow-lg active:shadow-none">
          Login
        </button>
      </div>
    </header>
  );
}
