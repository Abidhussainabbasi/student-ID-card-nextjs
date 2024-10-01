import Card from "./components/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Card name="Abid" rollno={111} day="Monday 2 to 5" />
      <Card name="Hussain" rollno={222} day="Monday 2 to 5" />
      <Card name="Arsalan" rollno={333} day="Monday 2 to 5" />
    </div>
  );
}

