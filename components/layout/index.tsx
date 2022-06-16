import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

interface LayoutProps {
    children?: React.ReactNode;
}

export function LayoutComponent({ children }: LayoutProps) {

    return (
        <>
            <HeaderComponent />

            {children}

            <FooterComponent />
        </>
    );
}




