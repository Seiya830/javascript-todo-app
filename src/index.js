import "./styles.css";

 const onClickAdd = () => {
     const inputText = document.getElementById("add-text").value;
     document.getElementById("add-text").value = "";
     
     const li =document.createElement("li");
     
     const div = document.createElement("div");
     div.className = "list-row";
     
     const p = document.createElement("p");
     p.innerText = inputText;
     
     // 完了ボタン
     const completeButton = document.createElement("button");
     completeButton.innerText = "完了";
     completeButton.addEventListener("click", () => {
         // 押された完了ボタンの親タグ（div）を未完了リストから削除
         deleteFromIncompleteList(deleteButton.closest("li"));
     });
     
     // 削除ボタン
     const deleteButton = document.createElement("button");
     deleteButton.innerText = "削除";
     deleteButton.addEventListener("click", () => {
         // 押された削除ボタンの親タグ（div）を未完了リストから削除
         deleteFromIncompleteList(deleteButton.closest("li"));
     });
     
     li.appendChild(div);
     div.appendChild(p);
     div.appendChild(completeButton);
     div.appendChild(deleteButton);
     
     document.getElementById("incomplete-list").appendChild(li);
 };
 
 // 未完了リストから指定の要素を削除
 const deleteFromIncompleteList = (target) => {
     const deleteTarget = deleteButton.closest("li");
     document.getElementById("incomplete-list").removeChild(deleteTarget);
 }
 
 document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());