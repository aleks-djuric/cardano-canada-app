export default function CardVertical({post}) {
  return (
    <div key={post.title} className="flex flex-col">
      <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
        <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
      </div>
      <div className="flex-1 py-6 px-2 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-red-600">
            <a href={post.category.href} className="hover:underline">
              {post.category.name}
            </a>
          </p>
          <a href={post.href} className="block mt-2">
            <p className="line-clamp-2 text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="line-clamp-3 mt-3 text-base text-gray-500">{post.description}</p>
          </a>
        </div>
        <div className="flex space-x-1 items-center mt-6 text-sm text-gray-500">
          <time dateTime={post.datetime}>{post.date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </div>
  )
}
