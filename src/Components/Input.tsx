import  { ChangeEvent } from "react";

type Props = {
  colClassName: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  id: string;
};
export const Input = (props: Props): JSX.Element => {
  return (
    <div className={props.colClassName}>
      <div className="form-group">
        <input
          id={props.id}
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

