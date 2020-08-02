import { EventEmitter } from '../../stencil-public-runtime';
export declare class SgnwRating {
    /** max number of stars */
    maxValue: number;
    /** current number of stars */
    value: number;
    componentWillLoad(): void;
    starList: Array<object>;
    /** number of stars was updated */
    ratingUpdated: EventEmitter;
    logUpdate(): void;
    setValue(newValue: any): void;
    createStarList(numberOfStars: number): void;
    render(): any;
}
