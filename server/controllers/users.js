import User from '../model/user.js';

// Create a user
const registerUser = async(req, res) =>{
    try{
    const createuser = await User.create({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact
    });
    
        // const dataSave = await createuser.save()
        await createuser.save()
        res.send("User Added Successfully");

    }catch{
        res.send("Error");
    }
};

// Getting all Userlist
const userList = async(req, res) =>{
    const user = await User.find();
    res.send(user);
};

// Getting individual user details
const getUser = async(req, res) =>{
    const singleUser = await User.findById(req.params.id);
    res.send(singleUser);
}

// Delete a user 
const deleteUser = async(req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.send("User Deleted Successfully");
}

// Update user details
const updateUser = async(req, res) => {

    try{
        const updateuser = {
            name:req.body.name,
            email:req.body.email,
            contact:req.body.contact
        };
        await User.findByIdAndUpdate(req.params.id, updateuser);
        res.send("User Updated Successfully");
    
    }catch{
        res.send("Error while updating a record");
    }
}

export { registerUser, userList, getUser, deleteUser, updateUser };