import Counting from "./Counting";

const guestsList = [
  { id: 1, age: "Ages 13 or above", who: "Adults" },
  { id: 2, age: "Ages 2 - 12", who: "Children" },
  { id: 3, age: "Under 2", who: "Infants" },
  { id: 4, age: "Bringing a service animal", who: "Pets" },
];

export default function AddGuests() {
  return (
    <>
      {guestsList.map((guest) => {
        return (
          <div
            key={guest.id}
            className={`flex items-center justify-between mt-4 pb-3
            ${guest.id !== 4 && "border-b border-stone-400/50 pb-4"}`}
          >
            {/*  */}
            <div className="me-3">
              <p className="font-semibold mb-1 text-sm">{guest.who}</p>
              <p className="font-light text-stone-700 text-[13px]">
                {guest.age}
              </p>
            </div>
            {/*  */}
            <Counting people={guest.who} />
            {/*  */}
          </div>
        );
      })}
    </>
  );
}
