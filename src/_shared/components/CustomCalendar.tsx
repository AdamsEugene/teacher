import { Calendar, Whisper, Popover, Badge } from "rsuite";
import { styled } from "styled-components";

function getTodoList(date: Date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: "10:30 am", title: "Meeting" },
        { time: "12:00 pm", title: "Lunch" },
      ];
    case 15:
      return [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
        { time: "10:00 pm", title: "Going home to walk the dog" },
      ];
    default:
      return [];
  }
}

export default function CustomCalendar() {
  function renderCell(date: Date) {
    const list = getTodoList(date);
    const displayList = list.filter((_, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <Li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <P key={index} title={item.title}>
                    <b>{item.time}</b> - {item.title}
                  </P>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </Li>
      );

      return (
        <Ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <Li key={index}>
              <Badge /> <b>{item.time}</b> - {item.title}
            </Li>
          ))}
          {moreCount ? moreItem : null}
        </Ul>
      );
    }

    return null;
  }

  return <Calendar bordered renderCell={renderCell} />;
}

const Ul = styled.div`
  text-align: left;
`;

const Li = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  text-overflow: ellipsis;
  overflow: hidden;
  /* width: 160px; */
  height: 1.2em;
  white-space: nowrap;
  cursor: pointer;
`;

const P = styled.p`
  cursor: pointer;
`;
