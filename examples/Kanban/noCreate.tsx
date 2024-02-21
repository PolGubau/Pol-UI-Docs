const code = `
import { KanbanCardProps, Kanban } from "pol-ui";
import React from "react";
const DEFAULT_CARDS: KanbanCardProps[] = [
  { title: "Welcome to the kanban", id: "1", column: "backlog" },
  { title: "You can create new cards", id: "2", column: "backlog" },
  { title: "And delete them", id: "3", column: "backlog" },
  { title: "You can also drag them", id: "4", column: "backlog" },
  {
    title: "Is not this cool?",
    id: "5",
    column: "todo",
  },
  {
    title: "I have an action!!!",
    id: "6",
    column: "todo",
    onClick: () => alert("I have been clicked"),
  },
  {
    title:
      "I am a card with a long long long long long long long long long long long long title",
    id: "7",
    column: "todo",
  },
  {
    title: "Here is another card",
    id: "8",
    column: "doing",
  },
  { title: "🦆 quack!", id: "9", column: "doing" },
  {
    title: "Quite a complete component, right?",
    id: "10",
    column: "done",
  },
];
const KanbanComponent = () => {
  const [cards, setCards] = React.useState(DEFAULT_CARDS);
  const handleDelete = (id: string) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  const columns = [...new Set(DEFAULT_CARDS.map((card) => card.column))];
  return (
    <Kanban
      cards={cards}
      setCards={setCards}
      columns={columns}
      onDelete={handleDelete}
    />
  );
};
export default KanbanComponent;
`;
export default code;
