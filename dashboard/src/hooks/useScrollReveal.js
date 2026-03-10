import { useEffect } from 'react';

/**
 * useScrollReveal — Global, mutation-aware scroll reveal hook.
 *
 * Uses IntersectionObserver to add `.revealed` to [data-reveal] elements
 * when they enter the viewport, AND a MutationObserver to automatically
 * observe elements that are added to the DOM *after* mount (e.g. async data).
 *
 * Call once in a layout component (PublicLayout) so all pages benefit.
 */
const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.12,
            rootMargin: '0px 0px -50px 0px',
        };

        // ── Intersection Observer ──────────────────────────────────────
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    io.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all existing [data-reveal] elements
        const observeAll = () => {
            document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
                io.observe(el);
            });
        };

        observeAll();

        // ── Mutation Observer — catches dynamically added elements ──────
        const mo = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType !== 1) return; // element nodes only
                    // If the added node itself has data-reveal
                    if (node.matches?.('[data-reveal]') && !node.classList.contains('revealed')) {
                        io.observe(node);
                    }
                    // Also check all descendants
                    node.querySelectorAll?.('[data-reveal]:not(.revealed)').forEach((el) => {
                        io.observe(el);
                    });
                });
            });
        });

        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            io.disconnect();
            mo.disconnect();
        };
    }, []); // run once on mount
};

export default useScrollReveal;
