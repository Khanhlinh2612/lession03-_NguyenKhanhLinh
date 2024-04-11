import React from 'react';
import NKL_FuncDemo from './components/NKL_FuncDemo'; 
import NKL_ClassComp from './components/NKL_ClassComp'; 

function App() {
  // Khai báo biến đối tượng
  const user = {
    userName: "k22cnt3",
    password: "123456a@",
    firstName: "Nguyen Khanh",
    lastName: "Linh"
  }

  // Khai báo hàm formatName
  const formatName = (user) => {
    return <h2>Xin chào, {user.firstName} {user.lastName}</h2>;
  }

  return (
    <div className="App">
      {/* Biểu thức JSX */}
      <div>
        <p>fullName: {user.firstName} {user.lastName}</p>
        {formatName(user)}
      </div>
      
      {/* Sử dụng function component */}
      <div> 
        {/* Sử dụng Func_Comp với props */}
        <NKL_FuncDemo userName="NKL" fullName="Nguyen Khanh Linh" age="20"/>
      </div>

      {/* Sử dụng class component */}
      <div>
        {/* Không sử dụng props */}
        <NKL_ClassComp/>
        <NKL_ClassComp company="Fit-NTU - K22CNT3" course="Reactjs"/>
        <NKL_ClassComp company="Fit-NTU - K22CNT4" course="Reactjs 1"/>
        <NKL_ClassComp company="Fit-NTU - K22CNT5" course="Reactjs 2"/>
        <NKL_ClassComp company="Fit-NTU - K22CNT6" course="Reactjs 3"/>
      </div>
    </div>
  );
}

export default App;
