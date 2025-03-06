function TodoFilters({ currentFilter, onFilterChange }) {
    const filters = [
      { value: 'all', label: 'All' },
      { value: 'active', label: 'Active' },
      { value: 'completed', label: 'Completed' }
    ];
  
    return (
      <div className="flex justify-center space-x-4 mb-4">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-lg ${
              currentFilter === filter.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } hover:bg-blue-500 hover:text-white transition`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    );
  }
  
  export default TodoFilters;