initSidebarItems({"constant":[["CDISK_MAGIC","A magic string placed at the beginning of a composite disk file to identify it."],["CDISK_MAGIC_LEN","The length of the CDISK_MAGIC string. Created explicitly as a static constant so that it is possible to create a character array of the same length."],["COMPOSITE_DISK_VERSION","The version of the composite disk format supported by this implementation."],["DISK_SIZE_SHIFT",""],["EFI_SYSTEM_PARTITION_GUID",""],["HEADER_PADDING_LENGTH",""],["LINUX_FILESYSTEM_GUID",""],["PARTITION_ALIGNMENT_SIZE","The amount of padding needed between the last partition entry and the first partition, to align the partition appropriately. The two sectors are for the MBR and the GPT header."],["PARTITION_SIZE_SHIFT",""]],"enum":[["Error",""],["ImagePartitionType","The type of partition."]],"fn":[["align_to_power_of_2","Round `val` up to the next multiple of 2**`align_log`."],["create_component_disks","Create one or more `ComponentDisk` proto messages for the given partition."],["create_composite_disk","Create a new composite disk image containing the given partitions, and write it out to the given files."],["create_gpt_entry","Create the `GptPartitionEntry` for the given partition."],["create_zero_filler","Create a zero filler file which can be used to fill the gaps between partition files. The filler is sized to be big enough to fill the gaps. (1 << PARTITION_SIZE_SHIFT)"],["range_intersection",""],["ranges_overlap",""],["write_beginning","Write protective MBR and primary GPT table."],["write_end","Write secondary GPT table."]],"struct":[["ComponentDiskPart",""],["CompositeDiskFile","Represents a composite virtual disk made out of multiple component files. This is described on disk by a protocol buffer file that lists out the component file locations and their offsets and lengths on the virtual disk. The spaces covered by the component disks must be contiguous and not overlapping."],["PartitionInfo","Information about a partition to create."]],"type":[["Result",""]]});