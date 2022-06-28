initSidebarItems({"fn":[["crosvm_client_balloon_stats","Returns balloon stats of the crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_balloon_vms","Adjusts the balloon size of the crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_make_rt_vm","Creates an RT vCPU for the crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_modify_battery","Modifies the battery status of crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_resize_disk","Resizes the disk of the crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_resume_vm","Resumes the crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_stop_vm","Stops the crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_suspend_vm","Suspends the crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_usb_attach","Attaches an USB device to crosvm instance whose control socket is listening on `socket_path`."],["crosvm_client_usb_detach","Detaches an USB device from crosvm instance whose control socket is listening on `socket_path`. `port` determines device to be detached."],["crosvm_client_usb_list","Returns all USB devices passed through the crosvm instance whose control socket is listening on `socket_path`."],["validate_socket_path",""]],"struct":[["BalloonStatsFfi","Similar to internally used `BalloonStats` but using i64 instead of Option. `None` (or values bigger than i64::max) will be encoded as -1."],["UsbDeviceEntry","Represents an individual attached USB device."]]});