import React from 'react';
type NavigationRef = {
    navigate: (name: string, params: any) => {}
}
export const navigationRef = React.createRef<NavigationRef>();

export function useAppNavigation(name: string, params?: any): any {
    navigationRef.current?.navigate(name, params);
}
