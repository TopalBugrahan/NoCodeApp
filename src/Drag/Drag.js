import { useDrag } from "react-dnd";
function Drag(name, type, left, top, inner_index, isChange, isContain, index) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item: { name, type, left, top, inner_index, isChange, isContain, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [name, type]
  );
  return { drag, isDragging };
}

export default Drag;
