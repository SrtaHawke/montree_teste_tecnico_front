import { DependencyList, RefObject, useEffect } from "react";

export function useAutoScroll(
    ref: RefObject<HTMLElement>,
    dependencies: DependencyList = [],
    behavior: ScrollBehavior = "smooth"
) {
    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        element.scrollTo({
            top: element.scrollHeight,
            behavior,
        });
    }, [ref, behavior, ...dependencies]);
}