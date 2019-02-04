const reveal_css_toggle = {
    initialize: (options = {}) => {
        if (
            !options.cssLists || !options.cssLists.length ||
            !options.linkSelectorList || !options.linkSelectorList.length ||
            !options.cssLists.every(cssList => cssList.length === options.linkSelectorList.length)
        ) {
            return;
        }

        const cssLists = options.cssLists;
        const linkSelectorList = options.linkSelectorList;
        const key = options.key || 'c';
        let cssIdx = 0;

        document.addEventListener('keyup', e => {
            if (e.key !== key) { return; }
            cssIdx++;
            linkSelectorList.forEach(
                (selector, idx) => document.querySelector(selector).href = cssLists[cssIdx % cssLists.length][idx]
            );
        })
    }
}
