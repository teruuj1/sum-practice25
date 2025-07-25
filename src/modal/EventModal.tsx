import { useState } from "react";
import { createPortal } from "react-dom";
import "../App.css";

type Friend = {
    name: string;
    email: string;
    phone: string;
};

export const EventModal = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [contactMethod, setContactMethod] = useState("");
    const [friends, setFriends] = useState<Friend[]>([]);

    const addFriend = () => {
        if (friends.length < 3) {
            setFriends([...friends, { name: "", email: "", phone: "" }]);
        }
    };

    const updateFriend = (index: number, field: keyof Friend, value: string) => {
        const updated = [...friends];
        updated[index][field] = value;
        setFriends(updated);
    };

    return createPortal(
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2 className="modal-title">Заявка на регистрацию для мероприятия</h2>
                    <svg className="modal-close" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                            d="M6.00003 4.58579L2.1716 0.757359L0.757385 2.17157L4.58581 6L0.757385 9.82843L2.1716 11.2426L6.00003 7.41421L9.82845 11.2426L11.2427 9.82843L7.41424 6L11.2427 2.17157L9.82845 0.757359L6.00003 4.58579Z"
                            fill="#21222C"/>
                    </svg>
                </div>

                <div className="modal-form">
                    <div>
                        <p>
                            Тип мероприятия <small>*</small>
                        </p>
                        <input
                        className="modal-input"
                        placeholder="Выберете вид мероприятия"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    </div>

                    <div>
                        <p>
                            ФИО <small>*</small>
                        </p>
                        <input
                            className="modal-input"
                            placeholder="Введите ФИО"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div>
                        <p>
                            Имейл <small>*</small>
                        </p>
                        <input
                            className="modal-input"
                            placeholder="Введите имейл"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <p>
                            Номер телефона <small>*</small>
                        </p>
                        <input
                            className="modal-input"
                            placeholder="+7 777 77 77"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    {friends.map((friend, index) => (
                        <div key={index} className="friend-block">
                            <input
                                className="modal-input"
                                placeholder="ФИО друга"
                                value={friend.name}
                                onChange={(e) => updateFriend(index, "name", e.target.value)}
                            />
                            <input
                                className="modal-input"
                                placeholder="Имейл друга"
                                value={friend.email}
                                onChange={(e) => updateFriend(index, "email", e.target.value)}
                            />
                            <input
                                className="modal-input"
                                placeholder="Телефон друга"
                                value={friend.phone}
                                onChange={(e) => updateFriend(index, "phone", e.target.value)}
                            />
                        </div>
                    ))}

                    {friends.length < 3 && (
                        <button
                            onClick={addFriend}
                            className="add-friend"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M6.87109 6.8L11.8 6.79999C11.9104 6.79999 12 6.71045 12 6.59999V5.39999C12 5.28954 11.9104 5.19999 11.8 5.19999L6.87109 5.2L6.87109 0.2C6.87109 0.089543 6.78155 -5.81926e-09 6.67109 0H5.47109C5.36064 5.81926e-09 5.27109 0.089543 5.27109 0.2V5.2L0.2 5.20001C0.0895428 5.20001 0 5.28955 0 5.40001V6.60001C0 6.71047 0.0895432 6.80001 0.2 6.80001L5.27109 6.8L5.27109 11.8C5.27109 11.9104 5.36064 12 5.47109 12H6.67109C6.78155 12 6.87109 11.9104 6.87109 11.8L6.87109 6.8Z" fill="#21222C"/>
                            </svg>
                            Добавить друга
                        </button>
                    )}

                    <div>
                        <p>
                            Предпочитаемый вид связи <small>*</small>
                        </p>
                        <select
                            className="modal-input"
                            value={contactMethod}
                            onChange={(e) => setContactMethod(e.target.value)}
                        >
                            <option value="">Выберите предпочитаемый вид связи</option>
                            <option value="email">Email</option>
                            <option value="phone">Телефон</option>
                        </select>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-back">Назад</button>
                    <button className="btn-next">Дальше</button>
                </div>

            </div>
        </div>,
        document.body
    );
};
