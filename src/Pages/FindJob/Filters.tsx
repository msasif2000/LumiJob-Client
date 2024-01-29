const Filters = () => {
  return (
    <div>
      <div className="col-span-1">
        <div className="flex flex-col justify-center h-auto md:min-h-32 px-3">
          <h4 className="font-semibold font-hanken text-2xl">Filters</h4>
        </div>
        <div className="border rounded p-5 lg:p-8 m-3 min-h-[35vh] bg-white sticky top-24">
          <h6 className="mb-3 text-sm font-medium text-gray-900">Category</h6>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <input
                id="apple"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="apple"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Apple (56)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="fitbit"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="fitbit"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Fitbit (56)
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
