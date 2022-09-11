import "./styles.css";

 const onClickAdd = () => {
     const inputText = document.getElementById("add-text").value;
     document.getElementById("add-text").value = "";
     
     const li =document.createElement("li");
     
     const div = document.createElement("div");
     div.className = "list-row";
     
     const p = document.createElement("p");
     p.innerText = inputText;
     
     const completeButton = document.createElement("button");
     completeButton.innerText = "完了";
     completeButton.addEventListener("click", () => {
         alert("完了");
     });
     
     // 削除ボタン
     const deleteButton = document.createElement("button");
     deleteButton.innerText = "削除";
     deleteButton.addEventListener("click", () => {
         const deleteTarget = deleteButton.closest("li");
         document.getElementById("incomplete-list").removeChild(deleteTarget);
     });
     
     li.appendChild(div);
     div.appendChild(p);
     div.appendChild(completeButton);
     div.appendChild(deleteButton);
     
     document.getElementById("incomplete-list").appendChild(li);
 };
 
 document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());