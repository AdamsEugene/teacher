import ShowMoreText from "react-show-more-text";
import Typography from "./Typography";
import { Button } from "rsuite";

interface Props {
  lines: number;
  content: string;
}

export default function LoadMore(props: Props) {
  const { content, lines } = props;
  const executeOnClick = (b: boolean) => {
    console.log(b);
  };

  return (
    <ShowMoreText
      lines={lines}
      more={
        <Button appearance="link" color="cyan">
          Show more
        </Button>
      }
      less={
        <Button appearance="link" color="cyan">
          Show less
        </Button>
      }
      className="content-css"
      anchorClass="show-more-less-clickable"
      onClick={executeOnClick}
      expanded={false}
      truncatedEndingComponent={"... "}
    >
      <Typography>{content}</Typography>
    </ShowMoreText>
  );
}
