import * as S from "./style";

interface iInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  nameError: string;
  msgerror?:string;
}

function Input({ label, type, placeholder, register, nameError,msgerror }: iInputProps) {
  return (
    <S.StyledFieldset>
      <label>{label}</label>
      <S.Input type={type} placeholder={placeholder} {...register(nameError)} />
      <span>{msgerror}</span>
    </S.StyledFieldset>
  );
}
export { Input };
