export type ParameterPropertyProps<T> = {
    onChange: (property: T) => void;
    property: T;
}