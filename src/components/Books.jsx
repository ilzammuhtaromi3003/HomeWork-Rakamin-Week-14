export default function Books({ id, title, author, image, publisher, year }) {
  return (
    // <div key={id} className="card mb-4 card-side bg-base-100 shadow-xl">
    //   <figure>
    //     <img
    //       className="w-48 h-80"
    //       src={`http://localhost:3000/${image}`}
    //       alt="image"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h1 className="card-title">
    //       {title}({year})
    //     </h1>
    //     <div className="mb-24">
    //       <p>{author}</p>
    //       <h3>{publisher}</h3>
    //     </div>
    //   </div>
    // </div>
    <div className="relative mb-10 grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
      <div
        className="absolute card-image inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
        style={{
          backgroundImage: `url(http://localhost:3000/${image})`,
        }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 py-14 px-6 md:px-12">
        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          {title} ({year})
        </h2>
        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
          {author}
        </h5>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
        />
      </div>
    </div>
  );
}
