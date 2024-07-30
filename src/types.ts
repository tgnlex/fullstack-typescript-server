export type Noop = () => void;
export type Bit = 0 | 1;
export type StringFn = (str: string) => string;
export type NumFn = (int: number) => number; 
export type Unit = string | number;
export type Value = Unit | boolean;
export interface Pair { [key:Value]: Value };
export type Var = Unit | Pair | void;
export type Data = Var | Var[];



