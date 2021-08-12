import React from 'react';
import styled from 'styled-components';


const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:90%;
    margin-top:3.5rem;
`
const LeftNavBar = styled.div`
    border-right:1px solid black;
    height:100vh
`

const Employees = () => {
    return (
        <>
        <div className="grid grid-cols-4">
                <LeftNavBar className="col-span-1">
                </LeftNavBar>
                <div className="col-span-3">
                    <Header className="container mx-auto">
                    <div>
                        <p>
                            Codeus employees
                        </p>
                    </div>
                    <div className="flex flex-row items-center space-x-10">
                        <button>search</button>
                        <button>filter</button>
                        <button>sort</button>
                    </div>
                    </Header>
                </div>
        </div>
        </>
    )
}

export default Employees;