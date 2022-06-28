initSidebarItems({"constant":[["DEVICE_RESET",""],["INTERRUPT_STATUS_CONFIG_CHANGED",""],["INTERRUPT_STATUS_USED_RING",""],["NOTIFY_REG_OFFSET","Offset from the base MMIO address of a virtio device used by the guest to notify the device of queue events."],["VIRTIO_MSI_NO_VECTOR",""]],"enum":[["BalloonError",""],["BalloonMode","Operation mode of the balloon."],["DescriptorError",""],["DescriptorType",""],["DeviceType",""],["Error",""],["Error","An error indicating something went wrong in virtio-video’s worker."],["InputError",""],["IommuError",""],["P9Error","Errors that occur during operation of a virtio 9P device."],["PciCapabilityType",""],["PciVirtioSubclass","Subclasses for virtio."],["RngError",""],["VideoBackendType",""],["VideoDeviceType",""]],"fn":[["base_features","Returns the set of reserved base features common to all virtio devices."],["copy_config","Copy virtio device configuration data from a subslice of `src` to a subslice of `dst`. Unlike std::slice::copy_from_slice(), this function copies as much as possible within the common subset of the two slices, truncating the requested range instead of panicking if the slices do not match in size."],["create_descriptor_chain","Test utility function to create a descriptor chain in guest memory."],["ffmpeg_supported_virtio_features",""],["get_mem_regions","Get all the mem regions from a `DescriptorChain` iterator, regardless if the `DescriptorChain` contains GPAs (guest physical address), or IOVAs (io virtual address). IOVAs will be translated to GPAs via IOMMU."],["new_evdev","Creates a new virtio input device from an event device node"],["new_keyboard","Creates a new virtio keyboard, which supports the same events as an en-us physical keyboard."],["new_mouse","Creates a new virtio mouse which supports primary, secondary, wheel and REL events."],["new_multi_touch","Creates a new virtio touch device which supports multi touch."],["new_single_touch","Creates a new virtio touch device which supports single touch only."],["new_switches","Creates a new virtio device for switches."],["new_trackpad","Creates a new virtio trackpad device which supports (single) touch, primary and secondary buttons as well as X and Y axis."]],"mod":[["async_device","Provides helpers that make it easier to process virtio queues on an async executor."],["async_utils","Virtio device async helper functions."],["balloon",""],["block",""],["console","Legacy console device that uses a polling thread. This is kept because it is still used by Windows ; outside of this use-case, please use [[asynchronous::AsyncConsole]] instead."],["descriptor_utils",""],["fs",""],["gpu",""],["input",""],["interrupt",""],["iommu",""],["ipc_memory_mapper","Provide utility to communicate with an iommu in another process"],["memory_mapper","MemoryMapper trait and basic impl for virtio-iommu implementation"],["memory_util","Utilities to access GuestMemory with IO virtual addresses and iommu"],["net",""],["p9",""],["pmem",""],["protocol","This file was generated by the following commands and modified manually."],["queue",""],["resource_bridge","This module defines the protocol between `virtio-wayland` and `virtio-gpu` for sharing resources that are backed by file descriptors."],["rng",""],["snd",""],["tpm",""],["vfio_wrapper","Wraps VfioContainer for virtio-iommu implementation"],["vhost","Implements vhost-based virtio devices."],["video","This module implements the virtio video encoder and decoder devices. The current implementation uses v3 RFC of the virtio-video protocol."],["virtio_device",""],["virtio_pci_common_config",""],["virtio_pci_device",""],["wl","This module implements the virtio wayland used by the guest to access the host’s wayland server."]],"struct":[["AvailIter","Consuming iterator over all available descriptor chain heads in the queue."],["Balloon","Virtio device for memory balloon inflation/deflation."],["Desc",""],["DescIter","An iterator over a single descriptor chain.  Not to be confused with AvailIter, which iterates over the descriptor chain heads in a queue."],["DescriptorChain","A virtio descriptor chain."],["Input","Virtio input device"],["Interrupt",""],["Iommu","Virtio device for IOMMU memory management."],["P9","Virtio device for sharing specific directories on the host system with the guest VM."],["Pmem",""],["Queue","A virtio queue’s parameters."],["Reader","Provides high-level interface over the sequence of memory regions defined by readable descriptors in the descriptor chain."],["ReaderIterator","An iterator over `DataInit` objects on readable descriptors in the descriptor chain."],["Rng","Virtio device for exposing entropy to the guest OS through virtio."],["Tpm","Virtio vTPM device."],["VideoDevice",""],["VirtioInputConfig",""],["VirtioPciCap",""],["VirtioPciDevice","Implements the PCI transport for virtio devices."],["VirtioPciNotifyCap",""],["VirtioPciShmCap",""],["Writer","Provides high-level interface over the sequence of memory regions defined by writable descriptors in the descriptor chain."],["virtio_input_absinfo",""],["virtio_input_bitmap",""],["virtio_input_device_ids",""]],"trait":[["SignalableInterrupt",""],["TpmBackend",""],["VirtioDevice","Trait for virtio devices to be driven by a virtio transport."]],"type":[["P9Result",""],["Result",""],["Result",""],["Result",""],["Result",""],["Result",""]]});