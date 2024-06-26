import * as React from "react";
import { CSSObject } from "../index";

type ApparentComponentProps<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    C extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = C extends React.JSXElementConstructor<infer P> ? React.JSX.LibraryManagedAttributes<C, P>
    : React.ComponentPropsWithRef<C>;

declare const cxsComponent: {
    <
        Component extends
            | keyof React.JSX.IntrinsicElements
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            | React.JSXElementConstructor<any>,
        PropsType extends object & ApparentComponentProps<Component>,
    >(
        component: Component,
    ): (arg: CSSObject | ((arg: PropsType) => CSSObject)) => React.JSXElementConstructor<PropsType>;
};

export = cxsComponent;
