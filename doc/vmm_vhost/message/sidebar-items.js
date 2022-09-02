initSidebarItems({"constant":[["MAX_ATTACHED_FD_ENTRIES","The VhostUserMemory message has variable message size and variable number of attached file descriptors. Each user memory region entry in the message payload occupies 32 bytes, so setting maximum number of attached file descriptors based on the maximum message size. But rust only implements Default and AsMut traits for arrays with 0 - 32 entries, so further reduce the maximum number…"],["MAX_MSG_SIZE","The vhost-user specification uses a field of u32 to store message length. On the other hand, preallocated buffers are needed to receive messages from the Unix domain socket. To preallocating a 4GB buffer for each vhost-user message is really just an overhead. Among all defined vhost-user messages, only the VhostUserConfig and VhostUserMemory has variable message size. For the VhostUserConfig, a maximum size of 4K is enough because the user configuration space for virtio devices is (4K - 0x100) bytes at most. For the VhostUserMemory, 4K should be enough too because it can support 255 memory regions at most."],["VHOST_USER_CONFIG_OFFSET","Starting position (inclusion) of the device configuration space in virtio devices."],["VHOST_USER_CONFIG_SIZE","Ending position (exclusion) of the device configuration space in virtio devices."],["VHOST_USER_FS_SLAVE_ENTRIES","Max entries in one virtio-fs slave request."],["VHOST_USER_MAX_VRINGS","Maximum number of vrings supported."]],"enum":[["MasterReq","Type of requests sending from masters to slaves."],["SlaveReq","Type of requests sending from slaves to masters."]],"struct":[["DescStatePacked","Inflight I/O descriptor state for packed virtqueues"],["DescStateSplit","Inflight I/O descriptor state for split virtqueues"],["QueueRegionPacked","Inflight I/O queue region for packed virtqueues"],["QueueRegionSplit","Inflight I/O queue region for split virtqueues"],["VhostSharedMemoryRegion","Virtio shared memory descriptor."],["VhostUserConfig","Message to read/write device configuration space."],["VhostUserConfigFlags","Flags for the device configuration message."],["VhostUserFSSlaveMsg","Slave request message to update the MMIO window."],["VhostUserFSSlaveMsgFlags","Flags for virtio-fs slave messages."],["VhostUserHeaderFlag","Common message flags for vhost-user requests and replies."],["VhostUserInflight","Single memory region descriptor as payload for ADD_MEM_REG and REM_MEM_REG requests."],["VhostUserMemory","Memory region descriptor for the SET_MEM_TABLE request."],["VhostUserMemoryRegion","Memory region descriptors as payload for the SET_MEM_TABLE request."],["VhostUserMsgHeader","Common message header for vhost-user requests and replies. A vhost-user message consists of 3 header fields and an optional payload. All numbers are in the machine native byte order."],["VhostUserProtocolFeatures","Vhost-user protocol feature flags."],["VhostUserShmemMapMsg","Slave request message to map a file into a shared memory region."],["VhostUserShmemMapMsgFlags","Flags for SHMEM_MAP messages."],["VhostUserShmemUnmapMsg","Slave request message to unmap part of a shared memory region."],["VhostUserSingleMemoryRegion","Single memory region descriptor as payload for ADD_MEM_REG and REM_MEM_REG requests."],["VhostUserU64","A generic message to encapsulate a 64-bit value."],["VhostUserVirtioFeatures","Transport specific flags in VirtIO feature set defined by vhost-user."],["VhostUserVringAddr","Vring address descriptor."],["VhostUserVringAddrFlags","Flags for vring address."],["VhostUserVringState","Vring state descriptor."]],"trait":[["Req","Used for the payload in Vhost Master messages."],["VhostUserMsgValidator","Vhost message Validator."]],"type":[["VhostUserConfigPayload","Payload for the VhostUserConfig message."],["VhostUserMemoryPayload","Payload of the VhostUserMemory message."]]});