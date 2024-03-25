import Image from "next/image";

interface Employee {
  results: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    picture: {
      large: string;
    };
  }[];
}

const Teams = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const employees: Employee = await response.json();

  return (
    <main>
      <div className="bg-[#0e0d0c]">
        <h1 className="pt-28 pb-10 text-center font-bold text-4xl text-[#BF3131]">
          Our Teams
        </h1>
      </div>


      <div className="bg-[#0e0d0c] flex flex-col items-center justify-center md:grid md:grid-cols-5 gap-8 md:px-10">
        {employees.results.map((employee, index) => (
          <div
            key={index}
            className="max-w-xs flex flex-col rounded overflow-hidden shadow-lg w-full items-center"
          >
            <div>
            <Image
              src={employee.picture.large}
              alt={`${employee.name.first} ${employee.name.last}`}
              width={300}
              height={300}
            />
            </div>
            <div className="px-6 py-4 text-center text-white pb-20">
              <div className="font-bold text-xl mb-2">{`${employee.name.first} ${employee.name.last}`}</div>
              <p>{employee.email}</p>
              <p>Phone: {employee.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Teams;