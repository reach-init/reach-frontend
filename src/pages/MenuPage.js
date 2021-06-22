import React, { useRef, useEffect, useState } from "react";
import PageHOC from './PageHOC';
import RestaurantMenuContent from '../components_refactored/RestaurantMenu/RestaurantMenuContent'
const RestaurantMenu = () => {
    const sectionRefs = [
        { section: "s1", ref: useRef(null), value: 0 },
        { section: "s2", ref: useRef(null), value: 1 },
        { section: "s3", ref: useRef(null), value: 2 },
        { section: "s4", ref: useRef(null), value: 3 },
        { section: "s5", ref: useRef(null), value: 4 },

    ];
    const [visibleSection, setVisibleSection] = useState();
    const [value, setValue] = React.useState(0);
    const [showTabs, setShowTabs] = React.useState(false);

    const headerRef = useRef(null);

    const getDimensions = ele => {
        if(!ele) return
        const { height, y } = ele.getBoundingClientRect();
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;
    
        return {
            height,
            offsetTop,
            offsetBottom,
            y
        };
    };

    const handleScroll = (e) => {
        const { height: headerHeight, y } = getDimensions(headerRef.current);
        const scrollPosition = e.detail.scrollTop + headerHeight + y;
        const selected = sectionRefs.find(({ ref }) => {
            const ele = ref.current;
            if (ele) {
                const { offsetBottom, offsetTop } = getDimensions(ele);
                return scrollPosition > offsetTop && scrollPosition < offsetBottom;
            }
        });
        if (selected && selected.section !== visibleSection) {
            setVisibleSection(selected.section);
            setValue(selected.value)
        } else if (!selected && visibleSection) {
            setVisibleSection(undefined);
        }
    };

    return (
        <PageHOC tabsLimit={getDimensions(headerRef.current)?.y} setShowTabs={setShowTabs} scrollEvents handleScroll={handleScroll} id="restaurant-page" name="Restaurant" component={
            <RestaurantMenuContent showTabs={showTabs} sectionRefs={sectionRefs} headerRef={headerRef} value={value} visibleSection={visibleSection} setValue={setValue} />
        } />
    )
}
export default RestaurantMenu