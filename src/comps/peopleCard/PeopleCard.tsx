import React, { useState } from "react";
import styles from "./peopleContactCard.module.sass";
import content from "./assets/content.svg";
import map from "./assets/map.svg";
import phones from "./assets/phone.svg";
import mail from "./assets/mail.svg";

export default function PeopleCard({
  name,
  email,
  age,
  department,
  phone,
  address,
  initial,
  imageUrl,
  getData,
}: any) {
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [copyId, setCopyId] = useState<Number>(0);

  const copyToClipBoard = async (copyMe: any) => {
    console.log(copyMe);
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  };

  return (
    <div className={`${styles.profileBox} overflow-hidden`}>
      <div className="p-3">
        <div className={`d-flex`}>
          <div
            className={`text-white d-flex justify-content-center align-items-center rounded-circle overflow-hidden ${styles.profilePic}`}
            style={{
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 256
              )},${Math.floor(Math.random() * 256)},${Math.floor(
                Math.random() * 256
              )})`,
            }}
          >
            {imageUrl ? (
              <img src={imageUrl} className={`${styles.profilePic}`} alt="" />
            ) : (
              initial
            )}
          </div>
          <div className="px-3">
            <div className={`${styles.profileFont}`}>{name}</div>
            <div className={`${styles.profileGray} py-1`}>{age}</div>
            <div className={`${styles.profileFontSmall} pb-1`}>
              {department}
            </div>
          </div>
        </div>
        <div className={`${styles.profileFont} pt-4 pb-2`}>
          Contact Information
        </div>

        <div
          className={`d-flex justify-content-between align-items-center w-100`}
        >
          <div className={`d-flex align-items-center w-100`}>
            <img src={mail} width={`13px`} alt="" />{" "}
            <div className={`ps-2 ${styles.profileFontSmall}`}>{email}</div>
          </div>
          <div
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => {
              copyToClipBoard(email);
              setCopyId(0);
            }}
          >
            <img src={content} width={`13px`} alt="" />
            <div className={styles.tooltip}>
              {copySuccess === `Copied!` && copyId == 0 && copySuccess}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center w-100 py-2">
          <div className={`d-flex align-items-center w-100`}>
            <img src={phones} width={`13px`} alt="" />
            <div className={`ps-2 ${styles.profileFontSmall}`}>{phone}</div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              copyToClipBoard(phone);
              setCopyId(1);
            }}
          >
            <img src={content} width={`13px`} alt="" />
            <div className={styles.tooltip}>
              {copySuccess === `Copied!` && copyId == 1 && copySuccess}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className={`d-flex align-items-center w-100`}>
            <img src={map} width={`13px`} alt="" />{" "}
            <div className={`ps-2 ${styles.profileFontSmall}`}>{address}</div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              copyToClipBoard(address);
              setCopyId(2);
            }}
          >
            <img src={content} width={`13px`} alt="" />
            <div className={styles.tooltip}>
              {copySuccess === `Copied!` && copyId == 2 && copySuccess}
            </div>
          </div>
        </div>
      </div>
      <button
        className={`d-flex justify-content-center align-items-center w-100 ${styles.profileFetchNew}`}
        onClick={getData}
      >
        Fetch New
      </button>
    </div>
  );
}
