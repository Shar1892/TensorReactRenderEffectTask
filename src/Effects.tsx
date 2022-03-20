import { useEffect, useState } from 'react';

import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [currentValue, setCurrentValue] = useState(-1);

    const changeMessage = (message: number): void => {
        console.log(message);
        setCurrentValue(message);
    };

    useEffect(() => {
        subscribe(props.sourceId, changeMessage);
        return () => {
            unsubscribe(props.sourceId, changeMessage);
            setCurrentValue(-1);
        };
    }, [props.sourceId]);
    return <div>{`${props.sourceId}: ${currentValue}`}</div>;
}
