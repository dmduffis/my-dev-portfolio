
export default function Project({title, coverImg, description, url}) {
  return (
    <div className="w-1/2 h-full font-gray-900 ">
    <div className="flex flex-column h-full m-4 border rounded-3xl">
      <div className="w-full m-3 rounded-2xl ">
        <img className="rounded-xl"src={coverImg} />
        <p className="mt-4 mb-2 mx-2 font-semibold text-xl">{title}</p>
        <p className="mb-4 mx-2 text-l">{description}</p>
        <button className="mx-2 p-3 rounded-full text-gray-100 border border-gray-900 bg-gray-900 hover:bg-white hover:border-gray-300 hover:text-gray-900 transition-all ease-in ease-out">View Project</button>
      </div>
    </div>
   </div>
  )
}



// title={item.title}
//             coverImg={item.coverImg}
//             description={item.description}
//             url={item.url}
//             key={item.key}