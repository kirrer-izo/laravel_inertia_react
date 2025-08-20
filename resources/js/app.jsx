import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || (page => <Layout children={page} />)
    return page
  },
  progress: {
    delay: 250,
    color: '#4B5563',
    showSpinner: true,
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})