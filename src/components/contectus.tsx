import { SettingsContext } from "@/context/settingContext";
import Image from "next/image";
import React, { useContext } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import SettingsIcon from "@mui/icons-material/Settings";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Videoproduktion", "Branding", "Webdesign", "Webentwicklung"];

{
  /* <option selected>Benötigte Dienstleistungen</option> */
}

const Contectus = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div id="contact" className="pt-10 md:pt-4">
      <div className="mt-20 bg-[#042b2b] relative md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-20 items-center bg-no-repeat bg-right-bottom bg-cover md:rounded-[32px]">
        <div className="xl:p-[104px] lg:p-14 p-10 z-10 pb-20 md:pb-14">
          <div className="md:hidden">
            <Image
              src="/svg/Message.svg"
              alt="message"
              className="mx-auto"
              width={100}
              height={100}
            />
          </div>
          <h5 className="text-[32px] text-center md:text-left md:text-[36px] lg:text-[42px] xl:text-[64px] font-bold text-white ">
            Kontaktiere Uns
          </h5>
          <p className="text-sm text-gray-300 text-center md:text-left">
            Haben Sie eine Frage zu unseren Dienstleistungen oder ein
            anstehendes Projekt in der Pipeline? Zögern Sie nicht, uns zu
            kontaktieren!
          </p>
          <form className="mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1.5C7.035 1.5 5.4375 3.0975 5.4375 5.0625C5.4375 6.99 6.945 8.55 8.91 8.6175C8.97 8.61 9.03 8.61 9.075 8.6175C9.09 8.6175 9.0975 8.6175 9.1125 8.6175C9.12 8.6175 9.12 8.6175 9.1275 8.6175C11.0475 8.55 12.555 6.99 12.5625 5.0625C12.5625 3.0975 10.965 1.5 9 1.5Z"
                      fill="#108989"
                    />
                    <path
                      d="M12.81 10.6125C10.7175 9.2175 7.30497 9.2175 5.19747 10.6125C4.24497 11.25 3.71997 12.1125 3.71997 13.035C3.71997 13.9575 4.24497 14.8125 5.18997 15.4425C6.23997 16.1475 7.61997 16.5 8.99997 16.5C10.38 16.5 11.76 16.1475 12.81 15.4425C13.755 14.805 14.28 13.95 14.28 13.02C14.2725 12.0975 13.755 11.2425 12.81 10.6125Z"
                      fill="#108989"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-[#052121] pl-10 w-full shadow-md text-gray-100 text-sm p-4 rounded-lg "
                  placeholder="Vor- und Nachname"
                />
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    width="18"
                    height="26"
                    viewBox="0 0 18 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 6.625H5.25C3 6.625 1.5 7.75 1.5 10.375V15.625C1.5 18.25 3 19.375 5.25 19.375H12.75C15 19.375 16.5 18.25 16.5 15.625V10.375C16.5 7.75 15 6.625 12.75 6.625ZM13.1025 11.1925L10.755 13.0675C10.26 13.465 9.63 13.66 9 13.66C8.37 13.66 7.7325 13.465 7.245 13.0675L4.8975 11.1925C4.6575 10.9975 4.62 10.6375 4.8075 10.3975C5.0025 10.1575 5.355 10.1125 5.595 10.3075L7.9425 12.1825C8.5125 12.64 9.48 12.64 10.05 12.1825L12.3975 10.3075C12.6375 10.1125 12.9975 10.15 13.185 10.3975C13.38 10.6375 13.3425 10.9975 13.1025 11.1925Z"
                      fill="#108989"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-[#052121] pl-10 w-full shadow-md text-gray-100 text-sm p-4 rounded-lg "
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.075 6.915C13.7175 6.915 13.1625 5.955 13.8375 4.7775C14.2275 4.095 13.995 3.225 13.3125 2.835L12.015 2.0925C11.4225 1.74 10.6575 1.95 10.305 2.5425L10.2225 2.685C9.5475 3.8625 8.4375 3.8625 7.755 2.685L7.6725 2.5425C7.335 1.95 6.57 1.74 5.9775 2.0925L4.68 2.835C3.9975 3.225 3.765 4.1025 4.155 4.785C4.8375 5.955 4.2825 6.915 2.925 6.915C2.145 6.915 1.5 7.5525 1.5 8.34V9.66C1.5 10.44 2.1375 11.085 2.925 11.085C4.2825 11.085 4.8375 12.045 4.155 13.2225C3.765 13.905 3.9975 14.775 4.68 15.165L5.9775 15.9075C6.57 16.26 7.335 16.05 7.6875 15.4575L7.77 15.315C8.445 14.1375 9.555 14.1375 10.2375 15.315L10.32 15.4575C10.6725 16.05 11.4375 16.26 12.03 15.9075L13.3275 15.165C14.01 14.775 14.2425 13.8975 13.8525 13.2225C13.17 12.045 13.725 11.085 15.0825 11.085C15.8625 11.085 16.5075 10.4475 16.5075 9.66V8.34C16.5 7.56 15.8625 6.915 15.075 6.915ZM9 11.4375C7.6575 11.4375 6.5625 10.3425 6.5625 9C6.5625 7.6575 7.6575 6.5625 9 6.5625C10.3425 6.5625 11.4375 7.6575 11.4375 9C11.4375 10.3425 10.3425 11.4375 9 11.4375Z"
                    fill="#108989"
                  />
                </svg>
              </div>

              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                className="bg-[#052121] pl-3 w-full shadow-md text-gray-100 text-sm p-0 rounded-lg"
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                startAdornment={
                  <SettingsIcon
                    style={{ color: "#368989" }}
                    className="mr-1 pr-1"
                  />
                }
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={personName.indexOf(name) > -1}
                      className="text-gray-400 border-white p-2"
                      sx={{
                        "&.Mui-checked": {
                          color: '#fff',
                        },
                      }}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-top pt-[18px] pl-3 pointer-events-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 1.5H5.25C3.18 1.5 1.5 3.1725 1.5 5.235V9.72V10.47C1.5 12.5325 3.18 14.205 5.25 14.205H6.375C6.5775 14.205 6.8475 14.34 6.975 14.505L8.1 15.9975C8.595 16.6575 9.405 16.6575 9.9 15.9975L11.025 14.505C11.1675 14.3175 11.3925 14.205 11.625 14.205H12.75C14.82 14.205 16.5 12.5325 16.5 10.47V5.235C16.5 3.1725 14.82 1.5 12.75 1.5ZM6 9C5.58 9 5.25 8.6625 5.25 8.25C5.25 7.8375 5.5875 7.5 6 7.5C6.4125 7.5 6.75 7.8375 6.75 8.25C6.75 8.6625 6.42 9 6 9ZM9 9C8.58 9 8.25 8.6625 8.25 8.25C8.25 7.8375 8.5875 7.5 9 7.5C9.4125 7.5 9.75 7.8375 9.75 8.25C9.75 8.6625 9.42 9 9 9ZM12 9C11.58 9 11.25 8.6625 11.25 8.25C11.25 7.8375 11.5875 7.5 12 7.5C12.4125 7.5 12.75 7.8375 12.75 8.25C12.75 8.6625 12.42 9 12 9Z"
                    fill="#108989"
                  />
                </svg>
              </div>
              <textarea
                className="bg-[#052121] pl-10 w-full shadow-md text-gray-100 text-sm p-4 rounded-lg "
                placeholder="Nachricht"
                rows={7}
              />
            </div>
          </form>
          <button className="text-main text-sm p-4 px-6 cursor-pointer hover:bg-gary-200 bg-white rounded-full w-full">
            KONTAKTIERE UNS
          </button>
        </div>
        <div className="p-10 lg:p-20 hidden md:block z-10">
          <Image
            src="/svg/Message.svg"
            alt="message"
            width={400}
            height={200}
          />
        </div>
        <img
          src="/images/contactbg.png"
          className="absolute hidden md:block right-0 bottom-0 rounded-br-[32px]"
          alt=""
        />
        <img
          src="/images/contact-mobile-bg.png"
          className="absolute md:hidden right-0 top-0 "
          alt=""
        />
      </div>
    </div>
  );
};

export default Contectus;
