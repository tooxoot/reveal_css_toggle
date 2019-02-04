const reveal_css_toggle = {
    initialize: (options = {}) => {
        if (
            !options.cssLists || !options.cssList.length ||
            !options.linkSelectorList || !options.linkSelectorList.length ||
            !options.cssLists.every(cssList => cssList.length === options.linkSelectorList.length)
        ) {
            return;
        }

        const cssLists = options.cssList;
        const linkSelectorList = options.linkSelectorList;
        const key = options.key || 'c';
        let cssIdx = 0;

        document.addEventListener('keyup', e => {
            if (e.key !== key) { return; }
            linkSelectorList.forEach(
                (selector, idx) => document.querySelector(selector).href = cssLists[++cssIdx % cssLists.length][idx]
            );
        })
    }
}