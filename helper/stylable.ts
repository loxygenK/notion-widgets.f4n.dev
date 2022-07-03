export type StylableProps<T = {}> = T & { className?: string };
export type StyleDeterminedProps<T = {}> = T & { className: string };
export type StylableFC<T = {}> = React.FC<StylableProps<T>>;
export type StyleDeterminedFC<T = {}> = React.FC<StyleDeterminedProps<T>>;

export function stylable<T>(component: StyleDeterminedFC<T>): StylableFC<T> {
  return (props: StylableProps<T>) => {
    const manipulatedProps: StyleDeterminedProps<T> = {
      ...props,
      className: props.className ?? "",
    };
    return component(manipulatedProps);
  };
}
