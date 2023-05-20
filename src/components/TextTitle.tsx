interface Props {
  title?: string;
  text1?: string;
  text2?: string;
  styles?: string;
}

const TextTitle = ({ title, text1, text2, styles }: Props) => {
  return (
    <div className="flex justify-center flex-col">
      <p className="text-center text-xl text-[gray]">{title}</p>
      <p className={`text-center  ${styles} `}>{text1}</p>
      {text2 && <p className={`text-center  ${styles} `}>{text2}</p>}
    </div>
  );
};

export default TextTitle;
