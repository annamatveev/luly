export default function PriorityComparator(priority1, priority2) {
  const PRIORITY_TEXT_TO_NUMBER = { interrupt: 4, high: 3, medium: 2, low: 1 };
  return (
    PRIORITY_TEXT_TO_NUMBER[priority1.toLowerCase()] >
    PRIORITY_TEXT_TO_NUMBER[priority2.toLowerCase()]
  );
}
