import { Fragment, useRef, Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { ShieldExclamationIcon } from "@heroicons/react/outline";
import { useAuth } from "./auth/Auth";
import {
  generatePortfolio,
  GeneratePortfolio,
  getAge,
} from "../services/GeneratePortfolioServices";
import { fetchMe } from "../services/AuthServices";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

const RegenerationConfirmation = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatcher<boolean>;
}) => {
  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const [loading, setLoading] = useState(false);

  const handleRegen = async () => {
    setLoading(true);
    if (auth?.user) {
      const body: GeneratePortfolio = {
        userId: auth.user.id,
        age: getAge(auth.user.dob),
        salary: auth.user.salary,
        net_worth: auth.user.netWorth,
        reported_risk: auth.user.riskRating,
      };
      console.log(body);

      await generatePortfolio(body);
      const user = await fetchMe(auth?.tkn);
      if (user) {
        auth?.setUser(user);
      }
      navigate("../dashboard");
      setOpen(false);
    }
    setLoading(false);
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
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-300 sm:mx-0 sm:h-10 sm:w-10">
                      <ShieldExclamationIcon
                        className="h-6 w-6 text-orange-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        You're about to regenerate you portfolio
                      </Dialog.Title>

                      <p className="mt-2">Are you sure?</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-400 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleRegen()}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="w-6 h-6 m-auto border-b-2 border-white rounded-full animate-spin"></div>
                    ) : (
                      "Regenerate"
                    )}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                    disabled={loading}
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

export default RegenerationConfirmation;
