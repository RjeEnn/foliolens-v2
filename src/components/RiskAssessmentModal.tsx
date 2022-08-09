import { Fragment, useRef, useState, Dispatch, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PuzzleIcon } from "@heroicons/react/outline";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

const RiskAssessmentModal = ({
  open,
  setOpen,
  setRiskAppetite,
}: {
  open: boolean;
  setOpen: Dispatcher<boolean>;
  setRiskAppetite: Dispatcher<string>;
}) => {
  const cancelButtonRef = useRef(null);

  const [q1, setQ1] = useState("4");
  const [q2, setQ2] = useState("4");
  const [q3, setQ3] = useState("4");
  const [q4, setQ4] = useState("4");

  const handleCalculate = () => {
    let calculatedRisk = Math.ceil(
      (parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4)) / 4
    );

    setRiskAppetite(calculatedRisk.toString());
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-300 sm:mx-0 sm:h-10 sm:w-10">
                      <PuzzleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Let's Find Out What Your Risk Appetite Is.
                      </Dialog.Title>
                      <div className="mt-2">
                        <p>On a scale from 1 to 10:</p>
                        <form className="px-8 pt-6 pb-8 mb-4">
                          <label
                            htmlFor="q1"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            How versed are you with investing?
                          </label>
                          <div className="flex gap-4 items-center">
                            <input
                              id="default-range"
                              type="range"
                              min="0"
                              max="9"
                              value={q1}
                              onChange={(e) => setQ1(e.target.value)}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <p>{parseInt(q1) + 1}</p>
                          </div>
                          <label
                            htmlFor="q1"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            How likely are you to go skydiving?
                          </label>
                          <div className="flex gap-4 items-center">
                            <input
                              id="default-range"
                              type="range"
                              min="0"
                              max="9"
                              value={q2}
                              onChange={(e) => setQ2(e.target.value)}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <p>{parseInt(q2) + 1}</p>
                          </div>
                          <label
                            htmlFor="q1"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            How comfortable are you with volatility of your
                            funds?
                          </label>
                          <div className="flex gap-4 items-center">
                            <input
                              id="default-range"
                              type="range"
                              min="0"
                              max="9"
                              value={q3}
                              onChange={(e) => setQ3(e.target.value)}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <p>{parseInt(q3) + 1}</p>
                          </div>
                          <label
                            htmlFor="q1"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Pick a number
                          </label>
                          <div className="flex gap-4 items-center">
                            <input
                              id="default-range"
                              type="range"
                              min="0"
                              max="9"
                              value={q4}
                              onChange={(e) => setQ4(e.target.value)}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <p>{parseInt(q4) + 1}</p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#3720D2] text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleCalculate()}
                  >
                    Calculate
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default RiskAssessmentModal;
