import { FC, memo, useState } from "react";
import { IInputProps } from "./Input.props";
import { Placeholder, Label, TextField, Wrap, Button } from "./style";

export const Input: FC<IInputProps> = memo((props): JSX.Element => {
  const {
    type = "text",
    name = "name",
    autoCapitalize = "off",
    autoCorrect = "off",
    maxLength,
    placeholder,
    value,
    onEnter,
  } = props;

  const [innerType, setInnerType] = useState<string>(type);
  const [focused, setFocused] = useState<"focused" | undefined>(undefined);

  const filled = props.value?.toString().length ? "filled" : undefined;
  const isInitType = innerType === type;

  return (
    <Wrap className={focused}>
      <Label>
        <Placeholder className={filled}>{placeholder}</Placeholder>
        <TextField
          name={name}
          type={innerType}
          className={filled}
          value={value}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          maxLength={maxLength}
          onChange={(e) => onEnter(e.target.value)}
          onFocus={() => setFocused("focused")}
          onBlur={() => setFocused(undefined)}
        />
      </Label>
      {type === "password" && (
        <Button
          type="button"
          className={filled}
          onClick={() =>
            isInitType ? setInnerType("text") : setInnerType(type)
          }
        >
          {isInitType ? "Показать" : "Скрыть"}
        </Button>
      )}
    </Wrap>
  );
});

export type { IInputProps };
