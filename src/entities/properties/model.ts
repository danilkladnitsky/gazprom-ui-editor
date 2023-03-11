type Properties = {
    minValue: number;
    maxValue: number;
    multiine: boolean;
    lineCount: number;
    dateFormat: string;
}


export type NumberProperty = Pick<Properties, "minValue" | "maxValue">;
export type StringProperty = Pick<Properties, "multiine" | "lineCount">;
export type DateProperty = Pick<Properties,"dateFormat">;