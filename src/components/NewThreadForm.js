
const assignees = [
    { name: 'Unassigned', value: null },
    {
      name: 'Wade Cooper',
      value: 'wade-cooper',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More items...
  ]
  const labels = [
    { name: 'Unlabelled', value: null },
    { name: 'Engineering', value: 'engineering' },
    // More items...
  ]
  const dueDates = [
    { name: 'No due date', value: null },
    { name: 'Today', value: 'today' },
    // More items...
  ]
  
  

const NewThreadForm = ({ handleClick }) => {
  
    return (
      <form action="#" className="relative mt-1">
        <div className="overflow-hidden sm:rounded-lg border border-gray-300 shadow">
          <label htmlFor="title" className="sr-only">
            Título
          </label>
            <input
              type="text"
              name="title"
              id="title"
              maxLength={250}
              className="block resize-y w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
              placeholder="Título"
            />
          <label htmlFor="description" className="sr-only">
            Contenido
          </label>
          <textarea
            rows={4}
            name="description"
            id="description"
            maxLength={3000}
            className="block w-full resize-y border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Contenido (opcional)"
            defaultValue={''}
          />
  
          <div className='px-4 pt-4 bg-white'>
  
            <span className="inline-flex rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span>
  
            <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span>
  
            <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span>
  
            <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700  mr-4 mb-5">
            Badge
          </span>
  
            <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span><span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-4 mb-5">
              Badge
            </span>
          </div>
  
          <div className="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
  
            <div className="flex-shrink-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-red-500 bg-white px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={ () => handleClick(false)}
              >
                Cancelar
              </button>
            </div>
            
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
  
        
      </form>
    )
}

export default NewThreadForm;
  