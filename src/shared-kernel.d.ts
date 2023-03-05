type LoadingStatus = "idle" | "loading" | "success" | "error";

type FunctionsWithRes<F> = {
  [K in keyof F as K extends string ? `${K}Status` : never]?: LoadingStatus;
};

type Model<State, Functions> = FunctionsWithRes<Functions> & State & Functions;

type JsonFile = Record<string, unknown>;
